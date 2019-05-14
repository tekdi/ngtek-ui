# ngtek-ui

# Ngtek-card Lib

This library is for Angular  projects to build a bootstrap card from passed data.As bootstrap card have header, body and footer, these all thing can be configured to show or not to show by using this library.

# Installing
npm install ngtek-card --save

Also install bootstrap-4.x for the design.


# Configs provided

User can pass specific amount of data so as to make the card looking like user wants. For example 
1) Some user needs only body and header or body and footer.

As the user paases the data in the data node the card will be generated.

# Implementation
Simply first import the module in your app.module.ts as shown below
import { NgtekCardModule} from 'ngtek-card';

imports : [NgtekCardModule]

Now, pass proper configuration so as to bootstrap card.

Displying complete ngtek-card
Code in component.html
app.component.html
```
<div class="row">
    <div class="col-md-3 text-center p-5" *ngFor="let cdata of cardData">
        <lib-ngtek-card [data]="cdata"></lib-ngtek-card>
    </div>
</div>
```

# Code in component.ts
```
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
      rotationTime: 500, // Time to choose random image after specific time and show in card (specified number of milliseconds.)
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
  ];

  ngOnInit() {

  }
}
```
