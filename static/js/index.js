var vm = new Vue({
    el: '#testDiv',
    data:{
        msg:'hello vue.js',
        age:'',
        mesage:''
    },
    methods: {    // 方法
        changeVal : function (mesage,event) {
            console.log(name+this.msg,'!!!');
            console.log(this.age);
            // console.log(event);
            console.log(mesage);
            vm.mesage = mesage;
        }
    }

})
new Vue({
    el: '#demo',
    data: {
        query: '',
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    }
})

var my_compon = Vue.extend({
     props: {
         msg:{
             type: String,
             required: true
         }

     },
    template: '<span>{{ msg }}</span>'
})
Vue.component('child', my_compon);

new Vue({
    el: '#componTest'
})
