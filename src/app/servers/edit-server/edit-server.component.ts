import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  public allowEdit = false;
  constructor(private serversService: ServersService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams) // 方法一
    // console.log(this.route.snapshot.fragment) // 方法一
    // this.route.fragment.subscribe((fragment)=>{
    //   console.log("fragment",fragment);

    // })
    this.route.params.subscribe((params:Params)=>{
      console.log("params",params);
      const id = +params['id'] | 1;
      this.server = this.serversService.getServer(id);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    })
    this.route.queryParams.subscribe((queryParams:Params)=>{
      console.log("queryParams",queryParams);

      this.allowEdit = queryParams['allowEdit']==='1' ? true : false
    })
    // const id = this.route.snapshot.paramMap.get('id'); // 取網誌參數寫法一
    // const id = this.route.snapshot.params['id']; // 取網誌參數寫法二
    const { id } = this.route.snapshot.params // 取網誌參數寫法三
    console.log("id",id)
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
