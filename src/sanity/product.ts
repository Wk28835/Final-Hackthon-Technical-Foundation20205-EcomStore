export default {
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title',
        },
        {
            name:'price',
            type:'number',
            title:'Price',
        },
        {
            name:'quantity',
            type:'number',
            title:'Quantity',
        },
        {
            name:'image',
            type:'image',
            title:'Image',
            options:{
                hotspot:true,
            },
        }, 
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            options: {
              list: [
                { title: 'Shoes', value: 'shoes' },
                { title: 'Trousers', value: 'trousers' },
                { title: 'Shirts', value: 'shirts' },
              ],
            },
        },   
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title',
                maxLength:96,
            },
        },
        
    ]
}