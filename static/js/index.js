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
var l = new Vue({
    el:"#for_test",
    data:{
        lists:[{
            text:'大家好'
        },{
            text:'我是刘迪'
        },{
            text:'英文名字：shuffleld'
        }]
    }
})
var i = new Vue({
    el:'#if_test',
    data:{
        ok:true
    },
    methods:{
        dochange: function(){
            if(this.ok){
                this.ok = false;
            }else{
                this.ok = true;
            }
        }
    }

})
var guo = new Vue({
    el:'#guolv',
    data:{
        textarea:'hello anyone hands up'
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
Vue.filter('reverse', function (value) {
    return value.split('').reverse().join('')
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
