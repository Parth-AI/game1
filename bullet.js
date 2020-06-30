class Bullet{
     constructor(){
          this.bullet = createSprite(player.x,player.y,3,10);
          this.bullet.velocityY = -30;
          this.bullet.shapeColor = "blue";
          bulletsGroup.add(this.bullet);
     }

     display(){

     }
}