import { Customer } from "@modules/customers/database/entities/Customer";
import { CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrdersProducts } from "./OrderProducts";


@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer)
    @JoinColumn({name: 'customer_id'})
  customer: Customer

  @OneToMany(() => OrdersProducts, order_products => order_products.order, {
    cascade: true,
  } )
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
