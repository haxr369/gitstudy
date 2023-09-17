import BtnDefault from '@/app/components/btns/BtnDefault'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

interface sidebarInterface {
    tags: string[]
    onSetTags: (newTags: string[]) => void
}

const RoomSidebar = (props: sidebarInterface) => {
    const { tags, onSetTags } = props
    const onChange = (e) => {
        if (e.target.checked) {
            onSetTags([...tags, e.target.value])
        } else {
            onSetTags(tags.filter((tag) => tag !== e.target.value))
        }
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
                    <FormControlLabel
                        control={<Checkbox />}
                        onChange={onChange}
                        value="swimming pool"
                        label="수영장"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        onChange={onChange}
                        value="BBQ"
                        label="BBQ"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        onChange={onChange}
                        value="foot volleyball court"
                        label="족구장"
                    />
                </FormGroup>
            </section>
        </aside>
    )
}

export default RoomSidebar
