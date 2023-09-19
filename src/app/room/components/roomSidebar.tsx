import BtnDefault from '@/app/components/btns/BtnDefault'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

interface sidebarInterface {
    tags: string[]
    onSetTags: (newTags: string) => void
}

const valueLabels = [
    { value: 'swimming pool', label: '수영장' },
    { value: 'BBQ', label: 'BBQ' },
    { value: 'foot volleyball court', label: '족구장' },
    { value: 'karaoke', label: '노래방' },
    { value: 'seminar room', label: '세미나실' },
    { value: 'spar', label: '스파' },
]

const RoomSidebar = (props: sidebarInterface) => {
    const { tags, onSetTags } = props
    const onChange = (e) => {
        onSetTags(e.target.value)
    }

    return (
        <aside>
            <h3 className="text-lg font-bold mx-6 my-3 pt-8 border-t-2  border-black/10">
                상세조건
            </h3>
            <div className="flex gap-4 ">
                <BtnDefault text="초기화" />
                <BtnDefault text="적용" />
            </div>
            <section className="ml-6 pt-6">
                <strong>공용시설</strong>
                <FormGroup className="grid grid-cols-2">
                    {valueLabels.map((valueLabel) => (
                        <FormControlLabel
                            key={valueLabel.value}
                            control={
                                <Checkbox
                                    checked={tags.includes(valueLabel.value)}
                                />
                            }
                            onChange={onChange}
                            value={valueLabel.value}
                            label={valueLabel.label}
                        />
                    ))}
                </FormGroup>
            </section>
        </aside>
    )
}

export default RoomSidebar
