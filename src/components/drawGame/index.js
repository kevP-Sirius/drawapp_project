import { useEffect, useState } from "react";
import { EventSourcePolyfill } from 'event-source-polyfill';
import './drawGame.scss'  
export const DrawGame =({drawStatus,switchDrawStatus,switchDrawOff})=>{
    const [hubData,setHubData]=useState({})
    let url1 = "http://localhost/.well-known/mercure"
    let url2 = "http://18.190.154.249/.well-known/mercure"
    let urlLocal = url1
    useEffect(()=>{
        if(hubData['imageUrl']!==undefined){
            var target =  document.getElementById('DrawIt').getContext('2d');
            // target.beginPath(); // begin
            // target.strokeStyle = 'black';
            // target.lineWidth = 5;
            // target.lineJoin = 'round';
            // target.lineCap = 'round';
            // var x= hubData.imageUrl.x
            // var y = hubData.imageUrl.y
            // target.moveTo(x,y);
            // target.lineTo(x,y);
            // target.stroke();
            // target.closePath();
            let {width,height} = document.getElementById('DrawIt').getBoundingClientRect()
            console.log(hubData['imageUrl'])
            var img = new Image(width,height);
            img.src = hubData['imageUrl'];
            img.onload = ()=>{
                target.drawImage(img,0,0);  
            }
        }
            
    },[drawStatus,hubData])
    useEffect(()=>{
                // The subscriber subscribes to updates for the https://example.com/users/dunglas topic
        // and to any topic matching https://example.com/books/{id}
        const url = new URL(urlLocal);
        url.searchParams.append('topic', 'http://example.com/books/1');
        // The URL class is a convenient way to generate URLs such as https://localhost/.well-known/mercure?topic=https://example.com/books/{id}&topic=https://example.com/users/dunglas

        const eventSource = new EventSourcePolyfill(url,{headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOltdfX0.TeOrW8WGfl0Rrnkvs4gxejZDpINNJxXUUjXDsmc1jZU'
        }});
        // The callback will be called every time an update is published
        eventSource.onmessage = e => {
            let data = JSON.parse(e.data)
            if(data['imageUrl']!==undefined){
                setHubData(JSON.parse(e.data));
            }
        }
    },[])
    const handleMove=(event)=>{
        if(true){ 
            
            var target =  event.target.getContext('2d');
            var rect =  event.target.getBoundingClientRect();
            var x=(event.changedTouches[0].clientX - rect.left) / (rect.right - rect.left) * event.changedTouches[0].target.width;
            var y = (event.changedTouches[0].clientY - rect.top) / (rect.bottom - rect.top) * event.changedTouches[0].target.height;
            let position = { x : x , y:y }
            
            
            target.beginPath(); // begin
            target.strokeStyle = 'black';
            target.lineWidth = 5;
            target.lineJoin = 'round';
            target.lineCap = 'round';
            target.moveTo(x,y);
            target.lineTo(x,y);
            target.stroke();
            target.closePath();
            let canvas = document.getElementById('DrawIt')
            let imgUrl = canvas.toDataURL(); 
            sendImgUrl(imgUrl)
           
        }
		
        
			
	}
    const handleSwitchStatus=(event)=>{
        switchDrawStatus();
    }
    const handleSwitchOf = ()=>{
        switchDrawOff()
    }

    let testPush = (imgData)=>{
        const postData = new URLSearchParams({
            'topic': 'http://example.com/books/1',
            'data': JSON.stringify({ imageUrl: imgData }),
        });
        fetch(urlLocal,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOltdfX0.TeOrW8WGfl0Rrnkvs4gxejZDpINNJxXUUjXDsmc1jZU',
                // the JWT must have a mercure.publish key containing an array of topic selectors (can contain "*" for all topics, and be empty for public updates)
                // the JWT key must be shared between the hub and the server
                'Content-Type': 'application/x-www-form-urlencoded',
                
            },
        method:"POST",
        body: postData

        }).then(response=>response).then(data=>{
           
        })
        
    }
    let sendImgUrl =(img) =>{
        // console.log(img)
        const postData = new URLSearchParams({
            'topic': 'http://example.com/books/1',
            'data': JSON.stringify({ imageUrl: img }),
        });
        fetch(urlLocal,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOltdfX0.TeOrW8WGfl0Rrnkvs4gxejZDpINNJxXUUjXDsmc1jZU',
                // the JWT must have a mercure.publish key containing an array of topic selectors (can contain "*" for all topics, and be empty for public updates)
                // the JWT key must be shared between the hub and the server
                'Content-Type': 'application/x-www-form-urlencoded',
                
            },
        method:"POST",
        body: postData

        }).then(response=>response).then(data=>{
           
        })
    }
    return(
        <>
            <div id="gameContainer" className="d-flex ">
                {/* <div className="chatContainer bg-info d-flex flex-column justify-content-end" >
                    <div id="bubbleContainers">hello world</div>
                    <div className="input-group">
                <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                </div> */}
                <canvas
                onTouchStart={handleSwitchOf}
                onTouchMove={handleMove}
                onTouchEnd={handleSwitchOf}
                // onMouseMove={handleMove}
                // onMouseDown={handleSwitchStatus}
                // onMouseUp={handleSwitchStatus}
                // onMouseLeave={handleSwitchOf}
                // onMouseEnter={handleSwitchOf}
                // onClick={handleSwitchOf}
                id="DrawIt"
                
                />
            </div>
        </>
    )
}