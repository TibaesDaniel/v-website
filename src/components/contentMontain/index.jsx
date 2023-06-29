import './style.css';

export default function contentWebsite(){
    return(
        <div className='content websiteContent'>
            <div className='box'>
                <div className='contentLeft'>
                    <h1>MOUNTAIN WALK</h1>
                    <p>I love walking in the mountains</p>
                    <p>There is something about the fresh air, the green scenery, and the challenge of reaching the summit that makes me feel alive and happy. I usually go with my friends or family, and we pack some snacks, water, and a camera to capture the beautiful views.</p>

                </div>
                <div className='contentRight'>
                    <h1>STUNNING VIEW</h1>
                    <p>Some of the most stunning views I have seen are</p>
                    <ul>
                        <li>The Grand Canyon in Arizona, USA.</li>
                        <li>The Eiffel Tower in Paris, France.</li>
                        <li>The Great Wall of China in China.</li>
                        <li>The Taj Mahal in Agra, India.</li>
                        <li>The Sydney Opera House in Sydney, Australia.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}