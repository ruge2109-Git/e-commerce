import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/states/blog/Blog.model';

@Component({
  selector: 'app-detalle-blog',
  templateUrl: './detalle-blog.component.html',
  styleUrls: ['./detalle-blog.component.scss']
})
export class DetalleBlogComponent implements OnInit {

  public blog!: Blog;
  public spinner: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService
  ) {
    this.obtenerBlogPorId(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  obtenerBlogPorId(id:string | null) {
    this.spinner = true;
    this._blogService.obtenerBlog(id+"").then((data)=>{
      this.spinner = false;
      if (!data.flag) {
        return;
      }

      this.blog = data.data;
    });
  }

}
