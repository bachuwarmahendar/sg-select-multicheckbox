import { Component, OnInit } from "@angular/core";
import { DataService, Person } from "../data.service";
import { map } from "rxjs/operators";

@Component({
  selector: "multi-checkbox-group-example",
  templateUrl: "./multi-checkbox-group-example.component.html",
  styleUrls: ["./multi-checkbox-group-example.component.scss"]
})
export class MultiCheckboxGroupExampleComponent implements OnInit {
  //  people: Person[] = [];
  selectedteamrolemaplist: TeamRoleMap[] = [];
  teamrolemap: TeamRoleMap;
  teamrolemaplist: TeamRoleMap[] = [];
  roles: []=[];
  teams: []=[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.roles.push("role1");
    this.roles.push("role2");
    this.roles.push("role3");

    this.teams.push("team1");
    this.teams.push("team2");

    var number=1;

    for(var team in this.teams)
    {
      for(var role in this.roles)
      {
        this.teamrolemap=new TeamRoleMap();
        this.teamrolemap.Id=number;
        this.teamrolemap.RoleName=role;
        this.teamrolemap.TeamName=team;
        number++;
        console.log(this.teamrolemap);
        
      }
    }

    debugger;
    this.teamrolemap = new TeamRoleMap();
    this.teamrolemap.Id = 1;
    this.teamrolemap.TeamId = 1;
    this.teamrolemap.RoleId = 1;
    this.teamrolemap.TeamName = "Team1";
    this.teamrolemap.RoleName = "Role1";
    this.teamrolemap.Name= this.teamrolemap.TeamName + "-" + this.teamrolemap.RoleName;
    this.teamrolemaplist.push(this.teamrolemap);

    this.teamrolemap = new TeamRoleMap();
    this.teamrolemap.Id = 2;
    this.teamrolemap.TeamId = 1;
    this.teamrolemap.RoleId = 2;
    this.teamrolemap.TeamName = "Team1";
    this.teamrolemap.RoleName = "Role2";
    this.teamrolemap.Name= this.teamrolemap.TeamName + "-" + this.teamrolemap.RoleName;
    this.teamrolemaplist.push(this.teamrolemap);

    this.teamrolemap = new TeamRoleMap();
    this.teamrolemap.Id = 3;
    this.teamrolemap.TeamId = 1;
    this.teamrolemap.RoleId = 3;
    this.teamrolemap.TeamName = "Team1";
    this.teamrolemap.RoleName = "Role3";
    this.teamrolemap.Name= this.teamrolemap.TeamName + "-" + this.teamrolemap.RoleName;
    this.teamrolemaplist.push(this.teamrolemap);

    this.teamrolemap = new TeamRoleMap();
    this.teamrolemap.Id = 4;
    this.teamrolemap.TeamId = 2;
    this.teamrolemap.RoleId = 1;
    this.teamrolemap.TeamName = "Team2";
    this.teamrolemap.RoleName = "Role1";
    this.teamrolemap.Name= this.teamrolemap.TeamName + "-" + this.teamrolemap.RoleName;
    this.teamrolemaplist.push(this.teamrolemap);

    this.teamrolemap = new TeamRoleMap();
    this.teamrolemap.Id = 5;
    this.teamrolemap.TeamId = 2;
    this.teamrolemap.RoleId = 2;
    this.teamrolemap.TeamName = "Team2";
    this.teamrolemap.RoleName = "Role2";
    this.teamrolemap.Name= this.teamrolemap.TeamName + "-" + this.teamrolemap.RoleName;
    this.teamrolemaplist.push(this.teamrolemap);

    this.teamrolemap = new TeamRoleMap();
    this.teamrolemap.Id = 6;
    (this.teamrolemap.TeamId = 2), (this.teamrolemap.RoleId = 3);
    this.teamrolemap.TeamName = "Team2";
    this.teamrolemap.RoleName = "Role3";
    this.teamrolemap.Name= this.teamrolemap.TeamName + "-" + this.teamrolemap.RoleName;
    this.teamrolemaplist.push(this.teamrolemap);

    //     this.dataService.getPeople()
    //         .pipe(map(x => x.filter(y => !y.disabled)))
    //         .subscribe((res) => {
    //             this.people = res;
    //             this.selectedPeople = [this.people[0].id];
    //         });
    // }
  }
  onClickMe() {
    for (var val of this.selectedteamrolemaplist) {
      var filterteamrolemap = this.teamrolemaplist.find(i => i.Id == val);
      console.log(filterteamrolemap);
    }
  }
}

export class TeamRoleMap {
  Id: number;
  TeamId: number;
  RoleId: number;
  TeamName: string;
  RoleName: string;
  Name:string;

}
