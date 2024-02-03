// src/app/services.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services = [
    { id: 1, name: 'Web Development', description: 'Explore our comprehensive web development services for a dynamic and user-friendly website. Our expert team specializes in creating responsive and visually appealing websites tailored to your business needs. From front-end design to back-end functionality, we deliver scalable and optimized solutions. Elevate your online presence with our web development expertise.' },
    { id: 2, name: 'Mobile App Development', description: 'Empower your website with seamless mobile experiences. Our mobile development services ensure your website is optimized for smartphones and tablets, offering responsive design, fast loading times, and intuitive navigation. Reach a broader audience and enhance user engagement with our expert mobile development solutions.' },
    { id: 3, name: 'Cloud Solutions', description: 'Providing scalable and secure cloud solutions for businesses.' },
    // Add more services as needed
  ];

  getServices(): Observable<any[]> {
    return of(this.services);
  }
}
