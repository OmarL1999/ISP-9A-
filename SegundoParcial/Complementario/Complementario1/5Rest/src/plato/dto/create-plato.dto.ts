import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlatoDto {


    @IsString()
    @IsNotEmpty()
    nombreplato:string;

    

}
