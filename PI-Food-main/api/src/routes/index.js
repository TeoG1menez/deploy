const { Router } = require('express');
const axios = require ('axios');
const {Diet, Recipe, recipe_diets} = require('../db');
const {API_KEY} = process.env
const router = Router();


const InfoApi = async() => {
    const UrlApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dc5d4316b79045b192b71139815dff93&addRecipeInformation=true`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" }});
    //https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5 https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}
    console.log('url api' , UrlApi.data)
    const Info = await UrlApi.data.results.map(el=> {
        return {
            img: el.image,
            name: el.title,
            idApi: el.id,
            resumen: el.summary? el.summary : undefined,
            healthScore: el.healthScore,
            pasoAPaso: el.analyzedInstructions[0] && el.analyzedInstructions[0].steps.map(p=> p.step),
            dieta: el.diets?.map(el=>el),
            tipoDePlato: el.dishTypes?.map(el=> el)
        }
    });
    
    return Info;
}

const InfoDataBase = async() => {
    return await Recipe.findAll({
        include:{
            model: Diet,
            attributes: ['name'],
            through:{
                attributes: [],
            },
        }
    });
}


const AllRecipes = async()=>{
    let DataBase = await InfoDataBase();
    let ApiInfo = await InfoApi();
    let Todas = ApiInfo.concat(DataBase);
    return Todas;
}


router.get('/recipes', async(req,res, next)=>{
    const nombre = req.query.name
    console.log(nombre)
    let TodasRecetas = await AllRecipes()
   
   try{  if(nombre){ 
    let recetaFiltrada = await TodasRecetas.filter(el=> el.name.toLowerCase().includes(nombre.toLowerCase()))
    if(recetaFiltrada.length > 1){
    return res.status(200).send(recetaFiltrada);
}
   else {
      return  res.status(404).send('No esta')
   } } return  res.status(200).send(TodasRecetas)    } 
        catch(error){
        console.log(error);
            next(error)
        }
});

router.get("/recipes/:id", async(req,res,next) =>{

    const {id} = req.params;
    
    try { 
         if(id){ 
              const re = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`, { 
                headers: { "Accept-Encoding": "gzip,deflate,compress" }})
 
              if(re){
 
                const recipe = {
                   id: re.data.id,
                   name: re.data.title,
                   image: re.data.image,
                   resumen: re.data.summary,
                   healthScore: re.data.healthScore,
                   steps: re.data.analyzedInstructions[0] && re.data.analyzedInstructions[0].steps.map(p=> p.step),
                   dieta: re.data.diets
                }
                return res.status(200).send(recipe)
               }
          }
              let recipeDataBase = await Recipe.findByPk(id)
              if(recipeDataBase){
                   let dietsDb =await recipeDataBase.getDiets()
                   let diets  = dietsDb.map(d => d.dataValues.name)
                   return res.status(200).send({...recipeDataBase.dataValues, diets})
              }
              else { return res.status(200).send('holas')}
 
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.post('/recipes', async (req, res) => {
    let{
        name, //
        resumen, //
        HealthScore, //
        img,
        Steps, //
        dieta //
    } = req.body

    try{
        let recipeCreate = await Recipe.create({ 
            name,
            resumen,
            HealthScore,
            img,
            Steps,
        })

        let dietDB = await Diet.findAll({ 
            where: {name: dieta}
        })

        if (!name) return res.status(400).send({error: 'Debe ingresar el name para la receta'});
        if (!resumen) return res.status(400).send({error: 'Debe ingresar un resumen del receta'});
        recipeCreate.addDiet(dietDB);
        res.send(recipeCreate);

    }catch(error){
        res.status(400).send(error);
    }
})
router.get('/diets', async (req, res)=>{
    try{
        let TodasRecetas = await AllRecipes()
        TodasRecetas.forEach(recipe => {
            recipe.dieta.map(dieta => {
              Diet.findOrCreate({
                where: { name: dieta }
              })
            })
          })
          const TodasDietas = await Diet.findAll()
         return res.status(200).send(TodasDietas)
    } catch(error){
        console.log(error)
        return res.status(404).send( error)
    }
 })

router.get("*", (req,res) =>{

    res.status(405).json("the path does not exist")
 
 })




module.exports = router;
