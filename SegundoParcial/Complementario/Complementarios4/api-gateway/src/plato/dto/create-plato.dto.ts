import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlatoDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Nombre:string;

}

