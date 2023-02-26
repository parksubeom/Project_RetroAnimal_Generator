import '../Style/Profile.css';
import SelectButton from '../component/SelectButton.jsx';
function Profile({ setRandomFace, setRandomColor, setRandomEyes, setRandomMouth, setRandomAcc, setRandomPattern, setRandombackground }) {

    return (
        <>
            <section className='all-group'>
                <aside className='clip-group'>
                    <div className='clip-bottom'><p>학생 프로필 작성</p></div>
                    <div className='clip-top'></div>
                </aside>
                <ul>
                    <li class="Screw top-left">×</li>
                    <li class="Screw top-right">×</li>
                    <li class="Screw bottom-left">×</li>
                    <li class="Screw bottom-right">×</li>
                </ul>
                <div className='profilePaper-group'>
                    <SelectButton setRandomFace={setRandomFace} setRandomColor={setRandomColor} setRandomEyes={setRandomEyes} setRandomMouth={setRandomMouth} setRandomAcc={setRandomAcc} setRandomPattern={setRandomPattern} setRandombackground={setRandombackground} />
                </div>
            </section>
        </>

    );
}

export default Profile;