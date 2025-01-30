export default {
    name:'orders',
    type:'document',
    title:'Order',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Customer Name',
        },
        {
            name:'email',
            type:'string',
            title:'Email Address',
        },
        {
            name:'phone',
            type:'number',
            title:'Phone',
        },
        {
            name:'address',
            type:'string',
            title:'Address',
        },
        {
            name:'product_title',
            type:'string',
            title:'title',
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
            name:'image',
            type:'image',
            title:'Image',
            options:{
                hotspot:true,
            },
        }, 
        {
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
              list: [
                { title: 'Paid', value: 'Paid' },
                { title: 'Pending', value: 'Pending' },
                
              ],
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