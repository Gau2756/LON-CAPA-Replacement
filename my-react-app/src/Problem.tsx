import {InlineMath, BlockMath} from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Problem(){
    return(
        <div>
            <p>
                Inline: <InlineMath math = "E = mc^2"></InlineMath>
            </p>
            <BlockMath> math = "\int_0^    \infty x^2 dx"</BlockMath>
        </div>
    );
}
 