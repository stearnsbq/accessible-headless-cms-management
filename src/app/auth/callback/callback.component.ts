import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent {

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router){


    this.route.fragment.subscribe((result) => {
      if(!result){
        return;
      }

      const params = new URLSearchParams(result!);

      this.auth.accessToken = params.get('access_token')!;  

      this.router.navigate(['', 'projects'])


    })

  }

}
