import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/states/blog/Blog.model';

@Component({
  selector: 'app-blog-reciente',
  templateUrl: './blog-reciente.component.html',
  styleUrls: ['./blog-reciente.component.scss']
})
export class BlogRecienteComponent implements OnInit {

  public blogs:Blog[] = [];

  constructor(private _blogService:BlogService) { }

  ngOnInit(): void {
    this.obtenerBlogs();
  }

  obtenerBlogs(){
    this._blogService.obtenerTodosLosBlogs().then((data)=>{
      if (!data.flag) {
        return;
      }
      this.blogs = data.data.slice(0,4);
    })
  }

}
