import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

interface UserCreationAttrs {
	email:string,
	password:string
}

@Table({ tableName: 'users' })
export class User extends Model<User,UserCreationAttrs > {
	@ApiProperty({example:'1',description:'Unique id'})
	@Column({type:DataType.INTEGER,unique:true, autoIncrement:true, primaryKey:true})
	id: number
	@ApiProperty({example:'user@gmail.com',description:'Email address'})
	@Column({type:DataType.STRING,unique:true, allowNull:false})
	email: string
	@ApiProperty({example:'12345678',description:'Password'})
	@Column({type:DataType.STRING,allowNull:false})
	password: string
	@ApiProperty({example:'true',description:'Banned or not'})
	@Column({type:DataType.BOOLEAN, defaultValue:false})
	banned: boolean
	@ApiProperty({example:'Obscene speech',description:'Ban reason'})
	@Column({type:DataType.STRING, allowNull:true})
	banReason: string
}