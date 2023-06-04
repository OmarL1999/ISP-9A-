import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plato {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
  
    @Column('varchar',{
        unique:true
    })
    nombreplato:string;


    @Column('boolean', {default:true})
    estado:boolean;
}
