import { NgModule } from "@angular/core";
import { FiltroUniPipe } from "./filtro-uni.pipe";
import { FiltropacPipe } from './filtropac.pipe';

@NgModule({
    declarations: [
        FiltroUniPipe,
        FiltropacPipe
    ],
    exports: [
        FiltroUniPipe,
        FiltropacPipe
    ]
})
export class PipesModule {}