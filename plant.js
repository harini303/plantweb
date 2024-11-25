const btns=[
    {
        id: 1,
        name: 'Flowering plants'
    },
    {
        id: 2,
        name: 'Indoor plants'
    },
    {
        id: 3,
        name: 'Outdoor plants'
    },
    {
        id: 4,
        name: 'Medicinal Plants'
    },
    {
        id: 5,
        name: 'Hanging Plants'
    },
    {
        id: 5,
        name: 'Low Light Plants'
    },
    ]
    
    
    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');
    
    
    const product = [
    {
        id: 1,
        image: 'image/plant1.avif',
        title: 'peace lily plant',
        price: 120,
        category: 'mobile'
    },
    {
        id: 5,
        image: 'image/plant2.avif',
        title: 'peace lily plant',
        price: 600,
        category: 'airpods'
    },
    {
        id: 3,
        image: 'image/plant3.jpg',
        title: 'Green plants',
        price: 230,
        category: 'cameras'
    },
    {
        id: 1,
        image: 'image/plant4.avif',
        title: 'teak plant',
        price: 300,
        category: 'cameras'
    },
    {
        id: 5,
        image: 'image/plant5.avif',
        title: 'Teak plant',
        price: 650,
        category: 'airpods'
    },
    {
        id: 3,
        image: 'image/plant6.avif',
        title: 'Plants green',
        price: 200,
        category: 'cameras'
    },
    {
        id: 4,
        image: 'image/plant7.jpeg',
        title: 'palnts',
        price: 100,
        category: 'Laptop'
    },
    {
        id: 1,
        image: 'image/collection5.avif',
        title: 'plants',
        price: 350,
        category: 'Laptop'
    },
    {
        id: 3,
        image: 'image/ee-1.jpg',
        title: 'plants',
        price: 130,
        category: 'cameras'
    },
    {
        id: 5,
        image: 'image/hh-1.jpg',
        title: 'palnts',
        price: 85,
        category: 'airpods'
    },
    ];
    const categories = [...new Set(product.map((item)=>
        {return item}))]
    
    
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }
    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
                </div>`)
        }).join('');
    }
    displayItem(categories);
    