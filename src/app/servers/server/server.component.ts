import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.route.params.subscribe((params:Params)=>{
      const id = +params['id'] | 1;
      this.server = this.serversService.getServer(id);
    })
  }

  onEdit(){
    // this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'merge'})//會合併參數
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})//會用舊的參數覆蓋新的參數
  }

}
