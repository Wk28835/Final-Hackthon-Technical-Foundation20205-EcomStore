export default {
    name:'wish',
    type:'document',
    title:'MyWishList',
    fields:[
        {
            
            name:'user',
            type:'string',
            title:'User',
        },
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
            name:'colors',
            title:'Colors',
            type:'string',
            
        }, 
        {
            name:'size',
            title:'Size',
            type:'string',
            
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
              list: [
                { title: 'Available', value: 'Available' },
                { title: 'Sold Out', value: 'SoldOut' },
                
              ],
            },
        },
        {
            name:'quantity',
            type:'number',
            title:'Quantity',
        },
        {
            name:'image',
            title:'Image',
            type:'string',
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
