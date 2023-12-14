import react, { useState } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

export function Select() {
    const [codigo, setCodigo] = useState('404')
    const link = `https://http.cat/${codigo}`
    const httpCodes = [101, 102, 103, 200,201,202,204,206,207,300,301,302,303,304,305,307, 308, 400, 401, 402, 403, 404, 405, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 444, 450, 451, 497, 498, 499, 500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599]


    return (
        <div>
            <select onClick={(e) => {setCodigo(e.target.value)}} className="select select-ghost w-full max-w-xs">
                <option disabled selected>Escolha HTTP Code</option>

                {httpCodes.map((httpCode) => {
                    return (
                        <option>{httpCode}</option>
                    )
                })}

            </select>

           
            <img src={link} alt="" />
        </div>
    )
}