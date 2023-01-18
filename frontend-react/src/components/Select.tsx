import react, { useState } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

export function Select (){

    return(
        <SelectPrimitive.Root>
            
            {/* Dropdown e setinha */}
            <SelectPrimitive.Trigger aria-label='HTTP Code' className='flex items-center px-3 gap-3 text-Verde-900 border-b-2 transition duration-150 hover:bg-Verde-900 hover:text-Branco'>
                <SelectPrimitive.Value placeholder='Selecione um HTTP Code' />
                <SelectPrimitive.Icon className='text-Verde-900'>
                    <CaretDown/>
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            {/* Conteúdo do Dropdown */}
            {/* Está aparecendo no final da página, corrigir */}
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content className='border-2 border-Verde-900 rounded px-5 text-Verde-900'>
                    <SelectPrimitive.Viewport>
                        
                        <SelectPrimitive.Group>
                            <SelectPrimitive.Item value='100'>100</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='101'>101</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='102'>102</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='103'>103</SelectPrimitive.Item>
                        </SelectPrimitive.Group>

                        <SelectPrimitive.Separator/>

                        <SelectPrimitive.Group>
                            <SelectPrimitive.Item value='200'>200</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='201'>201</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='202'>202</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='204'>204</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='206'>206</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='207'>207</SelectPrimitive.Item>
                        </SelectPrimitive.Group>

                        <SelectPrimitive.Separator/>

                        <SelectPrimitive.Group>
                            <SelectPrimitive.Item value='300'>300</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='301'>301</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='302'>302</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='303'>303</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='304'>304</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='305'>305</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='307'>307</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='308'>308</SelectPrimitive.Item>
                        </SelectPrimitive.Group>

                        <SelectPrimitive.Separator/>

                        <SelectPrimitive.Group>
                            <SelectPrimitive.Item value='400'>400</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='401'>401</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='402'>402</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='403'>403</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='404'>404</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='405'>405</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='407'>407</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='408'>408</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='409'>409</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='410'>410</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='411'>411</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='412'>412</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='413'>413</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='414'>414</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='415'>415</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='416'>416</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='417'>417</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='418'>418</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='420'>420</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='421'>421</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='422'>422</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='423'>423</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='424'>424</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='425'>425</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='426'>426</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='429'>429</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='444'>444</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='450'>450</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='451'>451</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='497'>497</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='498'>498</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='499'>499</SelectPrimitive.Item>
                        </SelectPrimitive.Group>

                        <SelectPrimitive.Separator/>

                        <SelectPrimitive.Group>
                            <SelectPrimitive.Item value='500'>500</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='501'>501</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='502'>502</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='503'>503</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='504'>504</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='506'>506</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='507'>507</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='508'>508</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='509'>509</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='510'>510</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='511'>511</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='521'>521</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='522'>522</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='523'>523</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='525'>525</SelectPrimitive.Item>
                            <SelectPrimitive.Item value='599'>599</SelectPrimitive.Item>
                        </SelectPrimitive.Group>

                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}