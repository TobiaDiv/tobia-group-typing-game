import { createStore } from 'vuex'

export default createStore({
  state: {
    cart:[],
    min:0,
    max:99999,
    x:0,
    selectedtype:"" ,
    products:[



      {"name":"Hair","img":"phones/h1.jpg","price":50000,descr:"Hair","selectedtype":"Hair","like":11},
      {"name":"Hair","img":"phones/h2.jpg","price":60000,descr:"Hair","selectedtype":"Hair","like":11},
      {"name":"Hair","img":"phones/h3.jpg","price":80000,descr:"Hair","selectedtype":"Hair","like":11},
      {"name":"Hair","img":"phones/h4.jpg","price":30000,descr:"Hair","selectedtype":"Hair","like":11},
      {"name":"Hair","img":"phones/h5.jpg","price":80000,descr:"Hair","selectedtype":"Hair","like":11},
      {"name":"Hair","img":"phones/h6.jpg","price":40000,descr:"Hair","selectedtype":"Hair","like":11},
      {"name":"Hair","img":"phones/h7.jpg","price":80000,descr:"Hair","selectedtype":"Hair ","like":11},
      {"name":"Hair","img":"phones/h8.jpg","price":30000,descr:"Hair","selectedtype":"Hair","like":11},


      {"name":"skin care","img":"phones/s1.jpg","price":40000,descr:"skin care","selectedtype":"skin care","like":11},
      {"name":"skin care","img":"phones/s2.jpg","price":30000,descr:"skin care","selectedtype":"skin care","like":11},
      {"name":"skin care","img":"phones/s3.jpg","price":40000,descr:"skin care","selectedtype":"skin care","like":11},
      {"name":"skin care","img":"phones/s4.jpg","price":80000,descr:"skin care","selectedtype":"skin care","like":11},
      {"name":"skin care","img":"phones/s5.jpg","price":30000,descr:"skin care","selectedtype":"skin care","like":11},
      {"name":"skin care","img":"phones/s6.jpg","price":80000,descr:"skin care","selectedtype":"skin care","like":11},
      {"name":"skin care","img":"phones/s7.jpg","price":30000,descr:"skin care","selectedtype":"skin care","like":11},
      {"name":"skin care","img":"phones/s8.jpg","price":40000,descr:"skin care","selectedtype":"skin care","like":11},



      {"name":"Men","img":"phones/m11.jpg","price":80000,descr:"Men","selectedtype":"Men","like":11},
      {"name":"Men","img":"phones/m22.jpg","price":40000,descr:"Men","selectedtype":"Men","like":11},
      {"name":"Men","img":"phones/m33.jpg","price":30000,descr:"Men","selectedtype":"Men","like":11},
      {"name":"Men","img":"phones/m4.jpg","price":40000,descr:"Men","selectedtype":"Men","like":11},
      {"name":"Men","img":"phones/m5.jpg","price":80000,descr:"Men","selectedtype":"Men","like":11},
      {"name":"Men","img":"phones/m6.jpg","price":40000,descr:"Men","selectedtype":"Men","like":11},
      {"name":"Men","img":"phones/m7.jpg","price":80000,descr:"Men","selectedtype":"Men","like":11},
      {"name":"Men","img":"phones/m8.jpg","price":30000,descr:"Men","selectedtype":"Men","like":11}



    ]
  },
  mutations: {
  },
  actions: {
  },
  getters:{
      addlike(state){
        return  state.products.map(product=>product.like++)
      },
    filteredProducts(state){
      return state.products.filter(product=>product.price>=state.min && product.price<state.max &&  product. selectedtype.includes(state.selectedtype)) },
    total_bill(state){
      return state.cart.map(item=>item.price*item.qty).reduce((a,b)=>a+b,0)
    }
  },
  MostProduct(state) {
    return state.products.filter(product=>product.like>state.x).sort((a, b) => b.like - a.like).splice(0 , 3)
  },
  modules: {
  }
})
