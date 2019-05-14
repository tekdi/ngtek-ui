import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cardData = [{
    header: 'HEADER1',
    body: {
      title: 'Title1',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: [{ imageTitle: "MyImage", src: "/assets/images/innovation_tile_portal.jpg" },
      { imageTitle: "MyImage", src: "/assets/images/aa.jpg" },
      { imageTitle: "MyImage", src: "/assets/images/bb.jpg" },
      { imageTitle: "MyImage", src: "/assets/images/ee.jpg" },
      { imageTitle: "MyImage", src: "/assets/images/portal_ideation_course_week01_overview.jpg" }],
      rotationTime: 500,
    },
    footer: 'Footer1',
  },
  {
    header: 'Header2',
    body: {
      title: 'Title2',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: [{ imageTitle: "MyImage", src: "/assets/images/innovation_tile_portal.jpg" },
      { imageTitle: "MyImage", src: "/assets/images/cc.jpg" },
      { imageTitle: "MyImage", src: "/assets/images/dd.jpg" }]
    },
    footer: 'Footer2',
  },
  {
    header: 'Header3',
    body: {
      title: 'Title3',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: [{ imageTitle: "MyImage", src: "/assets/images/portal_ideation_course_week01_overview.jpg" },
      { imageTitle: "MyImage", src: "/assets/images/bb.jpg" }]
    },
    footer: '11111111111111',
  },
  {
    header: 'Header4',
    body: {
      title: 'Title4',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: [{ imageTitle: "MyImage", src: "/assets/images/gri_aspects_banner.jpg" }]
    },
    footer: 'Footer4',
  },
  {
    header: 'Header5',
    body: {
      title: 'Title5',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: [{ imageTitle: "MyImage", src: "/assets/images/portal_ideation_course_week01_overview.jpg" }]
    },
    footer: 'Footer5',
  },
  ];

  ngOnInit() {

  }
}
