import Image from 'next/image'
import img from '../public/3.jpg'

export default function PageName() {
    return (
      <div>
        <Image src={img} placeholder='blur' alt='pet' width={270} height={420}/>

        {
            ['1', '2', '3'].map(path => {
                return (
                    <div key={path}>
                        <Image src={`/${path}.jpg`} alt='pet' width='280' height='420'/>
                    </div>
                )
            })
        }
      </div>
    )
}