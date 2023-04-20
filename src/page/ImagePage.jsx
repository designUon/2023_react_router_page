import React from 'react'
import logo from '../logo.svg'
// import ''

export default function ImagePage() {
    return (
        <div>
            <h3>ImagePage</h3>
            <div>
                <img src="/logo192.png" alt="이미지" />
                <p>public폴더에서 가져오는 방법</p>
                <img src="/img/logo192.png" alt="이미지" />
                <p>public/img폴더에서 가져오는 방법</p>
                <p>build할 때 그 내용을 함께 가져감</p>
            </div>
            
            <hr />
            
            <div>
                <p>src 폴더에서 가져올때 import를 통해서 값을 가져옴</p>
                <img src={logo} alt="이미지"/>
                <p>require의 default를 통해서 접근하여 가져옴</p>
                <img src={require ('../logo.svg').default} alt="이미지" width={200} height={200}/>
            </div>

            <hr />
            
            <div>
                <p>style 백그라운드 이미지 확인</p>
                <div style={
                    {
                        width:"200px",
                        height:"200px",
                        backgroundImage:`url("/logo192.png")`,
                        backgroundSize:"cover"
                    }
                }>    
                </div>

                <hr />

                <p>style 백그라운드 이미지 확인 - src에서 들고온 값</p>
                <div style={
                    {
                        width:"200px",
                        height:"200px",
                        backgroundImage:`url(${logo})`,
                        backgroundSize:"contain",
                        backgroundRepeat:"no-repeat"
                    }
                }>    
                </div>
            </div>
        </div>
    )
}
