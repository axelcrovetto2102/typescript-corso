//classes:public, protected, private

 class Lesson{
 public  type: string;
 public  length: number;
 public  title: string,
 protected description?:string;
 private instances:number=0;
 private incInstances(): void{
    this.instances++;
 }
  
   constructor(
    type: string,
    length: number,
    title: string,
    description?:string){
      this.type=type;
      this.length=length;
      this.title=title;
      this.description=description;
      this.incInstances();
    }
    getInstances(){
      return this.instances ;
    }
 }

class VideoLesson extends Lesson{
  setDescription(desc: string){
    this.description=desc;
  }
}

 let lesson= new Lesson('VideoCourse', 4,'Intro','');
lesson.description='This is my course description'
