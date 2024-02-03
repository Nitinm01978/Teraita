// src/app/services/services.component.ts
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = []; // Initialize the property

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.servicesService.getServices().subscribe(services => {
      this.services = services;
    });
  }
}
