const pizza = new Entity()
//replace with pizza model
pizza.addComponent(new GLTFShape("Models/candyCane.glb"))
pizza.addComponent(new Transform(
  {
    position: new Vector3(12,0,12)
  }
))
engine.addEntity(pizza)

