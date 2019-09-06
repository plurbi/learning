import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { vehiclesRoutes } from '../vehicles/vehicles.routes'
import { VehiclesDetailComponent } from '../vehicles/vehicles-detail/vehicles-detail.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(vehiclesRoutes)
    ],
    declarations: [
        VehiclesDetailComponent
    ],
    providers: [

    ]
})
export class VehicleModule { }