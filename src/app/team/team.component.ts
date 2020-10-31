import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../shared/services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  private members: Entry<any>[] = [];

  constructor(
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getMembers()
      .then(members => this.members = members);
  }

}
