import React, { Component } from 'react';
export const DataContext = React.createContext();
export class DataProvider extends Component {
       state = {
           products: [
            {
                "_id": "1",
                "title": "Andres 1 Seater Sofa",
                "src": "https://ii2.pepperfry.com/media/catalog/product/a/n/236x260/andres-1-seater-sofa-in-beige-colour-by-woodsworth-andres-1-seater-sofa-in-beige-colour-by-woodswort-yef06q.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 150,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Antonio 1 Seater Sofa",
                "src": "https://ii3.pepperfry.com/media/catalog/product/a/n/266x293/antonio-1-seater-sofa-in-navy-blue-colour-by-woodsworth-antonio-1-seater-sofa-in-navy-blue-colour-by-r5ztjr.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 250,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Rico 1 Seater Sofa",
                "src": "https://ii3.pepperfry.com/media/catalog/product/r/i/236x260/rico-1-seater-sofa-in-velvet-blue-colour-rico-1-seater-sofa-in-velvet-blue-colour-eavmop.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 270,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Helsinki 3 Seater Sofa",
                "src": "https://ii3.pepperfry.com/media/catalog/product/h/u/236x260/hugo-one-seater-sofa-in-sandy-brown-colour-by-woodsworth-hugo-one-seater-sofa-in-sandy-brown-colour--znixui.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 100,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Bolton 1 Seater Sofa",
                "src": "https://ii1.pepperfry.com/media/catalog/product/b/o/266x293/bolton-solid-wood-1-seater-sofa-by-woodsworth-bolton-solid-wood-1-seater-sofa-by-woodsworth-d4us8i.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 140,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Sela 1 Seater Sofa",
                "src": "https://ii1.pepperfry.com/media/catalog/product/s/e/266x293/sela-1-seater-sofa-in-blue-colour-by-woodsworth-sela-1-seater-sofa-in-blue-colour-by-woodsworth-mb2j82.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 207,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Daichi Queen Size Bed",
                "src": "https://ii2.pepperfry.com/media/catalog/product/d/a/236x260/daichi-queen-size-bed-with-two-bedside-tables-in-columbia-walnut-finish-by-mintwud-daichi-queen-size-piwf3z.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 350,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Brayan King Size Bed",
                "src": "https://ii3.pepperfry.com/media/catalog/product/b/r/236x260/brayan-upholstered-king-size-bed-with-hydraulic-storage-in-light-grey-colour-by-casacraft-brayan-uph-mguriv.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 550,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Brayan King Size Bed",
                "src": "https://ii1.pepperfry.com/media/catalog/product/b/r/236x260/brayan-upholstered-queen-size-bed-with-hydraulic-storage-in-light-grey-colour-by-casacraft-brayan-up-2cfc60.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 270,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Ivanka Queen Size Bed",
                "src": "https://ii3.pepperfry.com/media/catalog/product/i/v/236x260/ivanka-queen-size-bed-with-box-storage-in-walnut-colour-by-casacraft-ivanka-queen-size-bed-with-box--5bscwp.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 100,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Hideki King Size Bed",
                "src": "https://ii1.pepperfry.com/media/catalog/product/h/i/236x260/hideki-blackline-king-size-bed-with-storage-in-walnut-finish-by-mintwud-hideki-blackline-king-size-b-cczdbv.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 140,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "Ren Queen Size Bed",
                "src": "https://ii3.pepperfry.com/media/catalog/product/r/e/236x260/ren-queen-size-bed-with-box-storage---two-bedside-tables-in-wenge-finish-by-mintwud-ren-queen-size-b-rduq4x.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 207,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "13",
                "title": "rex 3 Door Wardrobe",
                "src": "https://ii2.pepperfry.com/media/catalog/product/y/u/236x260/yuina-three-door-wardrobe-in-wenge-finish-by-mintwud-yuina-three-door-wardrobe-in-wenge-finish-by-mi-wiwvx7.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 150,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "14",
                "title": "dura 3 Door Wardrobe",
                "src": "https://ii3.pepperfry.com/media/catalog/product/k/i/236x260/kimura-3-door-wardrobe-with-2-drawers-in-tobacco-finish-by-mintwud-kimura-3-door-wardrobe-with-2-dra-oxd0lf.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 250,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "15",
                "title": "viu 3 Door Wardrobe",
                "src": "https://ii3.pepperfry.com/media/catalog/product/p/a/236x260/paine-fabric-wardrobe-by-diy-furniture-paine-fabric-wardrobe-by-diy-furniture-gihurz.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 270,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "16",
                "title": "Okina 4 Door Wardrobe",
                "src": "https://ii2.pepperfry.com/media/catalog/product/o/k/236x260/okinawa-4-door-wardrobe-in-coffee-finish-by-mintwud-okinawa-4-door-wardrobe-in-coffee-finish-by-mint-gkdjgm.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 100,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "17",
                "title": "Yoshi 6 Door Wardrobe",
                "src": "https://ii3.pepperfry.com/media/catalog/product/y/o/236x260/yoshihisa-6-door-wardrobe-with-3-drawers-by-mintwud-yoshihisa-6-door-wardrobe-with-3-drawers-by-mint-vt2oe2.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 140,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "18",
                "title": "Kosmo Optima 3 Door ",
                "src": "https://ii1.pepperfry.com/media/catalog/product/k/o/236x260/kosmo-optima-3-door-wardrobe-in-walnut-finish-by-spacewood-kosmo-optima-3-door-wardrobe-in-walnut-fi-akhozm.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 207,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "19",
                "title": "Champion Study Table",
                "src": "https://ii2.pepperfry.com/media/catalog/product/c/h/236x260/champion-study-table-in-pink-by-casacraft-champion-study-table-in-pink-by-casacraft-6iqfkq.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 150,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "20",
                "title": "Champion Study Table",
                "src": "https://ii2.pepperfry.com/media/catalog/product/c/h/236x260/champion-study-table-in-light-blue-by-casacraft-champion-study-table-in-light-blue-by-casacraft-wdsd0l.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 250,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "21",
                "title": "Champion Study Table",
                "src": "https://ii3.pepperfry.com/media/catalog/product/c/h/236x260/champion-study-table-in-red-by-casacraft-champion-study-table-in-red-by-casacraft-zzvo4l.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 270,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "22",
                "title": "Champion Study Table",
                "src": "https://ii1.pepperfry.com/media/catalog/product/c/h/236x260/champion-study-table-in-orange-by-casacraft-champion-study-table-in-orange-by-casacraft-rn7fz6.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 100,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "23",
                "title": "Champion Study Table",
                "src": "https://ii2.pepperfry.com/media/catalog/product/p/r/236x260/princess-study-unit-in-white---candy-pink-finish-by-mintwud-princess-study-unit-in-white---candy-pin-wpv3l6.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 140,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "24",
                "title": "Champion Study Table",
                "src": "https://ii3.pepperfry.com/media/catalog/product/v/a/236x260/valentina-study-table-with-two-drawers-and-top-shelf-in-white-finish-by-casacraft-valentina-study-ta-vd7fkp.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content":  "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 207,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "25",
                "title": "sazz Modular Kitchen",
                "src": "https://ii3.pepperfry.com/media/catalog/product/d/a/236x260/damaris-straight-modular-kitchen-designed-in-mdf-with-slate-grey-laminate-by-mangiamo-damaris-straig-robmwo.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 150,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "26",
                "title": "neel Modular Kitchen",
                "src": "https://ii2.pepperfry.com/media/catalog/product/y/i/236x260/yianni-island-modular-kitchen-designed-in-bwr-ply-with-ivory---teak-membrane-by-mangiamo-yianni-isla-fsodwt.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 250,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "27",
                "title": "Kitchen Drawer",
                "src": "https://ii2.pepperfry.com/media/catalog/product/m/u/236x260/multicolor-pvc-vinyl-kitchen-stylish-chef--wall-stickerby-decor-kafe-multicolor-pvc-vinyl-kitchen-st-4t9q9c.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 270,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "28",
                "title": "Lester Pouffe In Teal ",
                "src": "https://ii3.pepperfry.com/media/catalog/product/l/e/236x260/lester-pouffe-in-teal---glossy-gold-finish-by-bohemiana-lester-pouffe-in-teal---glossy-gold-finish-b-ofq20g.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 150,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "29",
                "title": "luxor Knitted Pouffe",
                "src": "https://ii2.pepperfry.com/media/catalog/product/r/o/236x260/romania-knitted-pouffe-in-yellow-colour-by-riance-creations-romania-knitted-pouffe-in-yellow-colour--b589uq.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 250,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "30",
                "title": "Combo Bean Bag",
                "src": "https://ii2.pepperfry.com/media/catalog/product/m/u/236x260/muddha-xxxl-bean-bag-with-round-pouffe-by-sattva-muddha-xxxl-bean-bag-with-round-pouffe-by-sattva-y20brs.jpg",
                "description": "FREE Delivery by Woodbaazar",
                "content": "When friends and family visit, your lounge room can now double up as a comfortable bedroom with the Solimo Metro Fabric 1 Seater Sofa cum Bed. Seating and sleeping 1 person when unfolded, this sofa cum bed comes with a pillow for added cushioning.",
                "price": 270,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
           ],
           cart: [],
           hel:[],
           total: 0
       };
 
       addCart = (id) =>{
            const {products,cart} = this.state;
            const check = cart.every(item =>{
                return item._id !== id
            })
            if(check){
                const data = products.filter(product =>{
                return product._id === id
                })
                this.setState({cart: [...cart,...data]})
            }else{
                alert("The product is alredy in the cart.")
            } 
       };

       reduction = id =>{
           const { cart } = this.state;
           cart.forEach(item =>{
               if(item._id === id){
                   item.count === 1 ? item.count = 1 : item.count -=1;
               }
           })
           this.setState({cart: cart});
           this.getTotal();
       };
       increase = id =>{
           const { cart } = this.state;
           cart.forEach(item =>{
               if(item._id === id){
                  item.count += 1;
               }
           })
           this.setState({cart: cart});
           this.getTotal();
       };
       removeProduct = id =>{
           if(window.confirm("Do you want to dekete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
           }
           
       };
       getTotal = ()=>{
           const{cart} = this.state;
           const res = cart.reduce((prev, item) => {
               return prev + (item.price * item.count);
           },0)
           this.setState({total: res})
       };

       componentDidUpdate(){
           localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
           localStorage.setItem('dataTotal', JSON.stringify(this.state.cart))
       };
       componentDidMount(){
           const dataCart = JSON.parse(localStorage.getItem('dataCart'));
           if(dataCart != null){
               this.setState({cart: dataCart});
           }
           const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
           if(dataTotal != null){
               this.setState({cart: dataTotal});
           }
       }

       render() {
           const {products,cart,total} = this.state;
           const {addCart,reduction,increase,removeProduct,getTotal} = this;
       return (
           <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, total, getTotal}}>
               {this.props.children}
           </DataContext.Provider>
       )
   }

}
