import ChatBubble from '../resources/background.svg'

function Chart() {
    
  return (
    <div className='chart card'>
        <p className="chart-title">Sales</p>
        <div className="chart-parent grid">
            <div className='y-items flex-col'>
                <p>$3000</p>
                <p>$2500</p>
                <p>$2000</p>
                <p>$1500</p>
                <p>$1000</p>
                <p>$500</p>
                <p>$0</p>
            </div>
            <div className='chart-div' id='chartDiv'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1027" height="208" viewBox="0 0 1027 208" fill="none">
                    <path d="M2 157.49L128.123 112.287C130.497 111.436 133.134 111.754 135.238 113.147L177.168 140.902C179.826 142.66 183.273 142.675 185.945 140.938L274.514 83.3594C278.067 81.0496 282.805 81.9112 285.317 85.324L371.625 202.569C374.751 206.816 381.059 206.929 384.336 202.797L496.085 61.8687C498.812 58.4294 503.801 57.8298 507.266 60.525L624.837 151.991C628.368 154.738 633.465 154.055 636.149 150.477L680.471 91.3824L740.795 5.86723C743.431 2.1305 748.657 1.3597 752.26 4.17635L832.953 67.268C835.483 69.2456 838.949 69.5194 841.758 67.9635L891.732 40.2774C893.672 39.2027 895.971 38.9815 898.081 39.6666L974.383 64.4519C977.082 65.3287 980.044 64.7098 982.166 62.8256L1025 24.7954" stroke="#007AFF" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <div className='dot-parent'>
                    <div className="chat-bubble" id='chatBubble'>
                        <img className='chat-bubble' src={ChatBubble} alt="" />
                        <div className='bubble-text'>
                            <p className="date">Sale 16 Jun</p>
                            <p className="price">$150</p>
                        </div>
                    </div>
                    <svg className='dot' id='dot' xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                        <g filter="url(#filter0_d_1_1405)">
                            <circle cx="19.5" cy="15.501" r="7.5" fill="#007AFF"/>
                            <circle cx="19.5" cy="15.501" r="9.35344" stroke="white" strokeWidth="3.70688"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_1_1405" x="0.879217" y="0.587252" width="37.2416" height="37.2413" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="3.70688"/>
                            <feGaussianBlur stdDeviation="3.70688"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1405"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1405" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div></div>
            <div className='flex-row x-items justify-content-between'>
                <p>Jan 2023</p>
                <p>Feb</p>
                <p>Mar</p>
                <p>April</p>
                <p>May</p>
                <p>Jun</p>
                <p>Jul</p>
                <p>Aug</p>
                <p>Sep</p>
                <p>Oct</p>
                <p>Nov</p>
                <p>Dec</p>
            </div>
        </div>
    </div>
  )
}

export default Chart