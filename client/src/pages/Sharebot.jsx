import React from 'react';

function Sharebot() {
  return (
    <>
        <div className="askbot">
            <div className='ifbubble'>
                {
                    btn.name === 'Image' 
                    ?
                    <img src={video} alt='video' />
                    :
                    btn.name === 'Video' 
                    ?
                    <img src={image} alt='image' />
                    :
                    btn.name === 'Gif'
                    ?
                    <img src={gif} alt='gif' />
                    :
                    btn.name === 'Text'
                    ?
                    <div>text</div>
                    : ''
                }
            </div>

            <div className="ifinput">
                {
                    btn.name === 'Text' ?
                    <input type="text" placeholder='Enter your text'/>
                    :
                    btn.name === 'Rating'?
                    <div><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button></div>
                    :
                    btn.name === 'Date'?
                    <input type="date" placeholder='Select a date'/>
                    :
                    btn.name === 'Number'?
                    <input type="number" placeholder='Enter a number'/>
                    :
                    btn.name === 'Email'?
                    <input type="email" placeholder='Enter your email'/>
                    :
                    btn.name === 'Phone'?
                    <input type="tel" placeholder='Enter your phone'/>
                    :
                    btn.name === 'Button' ?
                    <button>Submit</button>
                    : ''
                }
            </div>
        </div>
    </>
  )
}

export default Sharebot