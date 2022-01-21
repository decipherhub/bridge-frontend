import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import { EuiTextArea, EuiPage, EuiSpacer, EuiPanel, EuiText, EuiButton, EuiFieldText } from '@elastic/eui';

import { Score } from '../Score'


function User(){

    const [feeScore, setFeeScore] = React.useState(3); // 0 ~ 5
    const [timeScore, setTimeScore] = React.useState(3);
    const [interfaceScore, setInterfaceScore] = React.useState(3);
    const [supportScore, setSupportScore] = React.useState(3);
    
    const [feeText, setFeeText] = React.useState('');
    const [timeText, setTimeText] = React.useState('');
    const [interfaceText, setInterfaceText] = React.useState('');
    const [supportText, setSupportText] = React.useState('');

    /* function writeText(e) {
    }
    const writtenText = (e) => {
        setText(e.target.value);
    };*/
    

    return(
        <div className="user-review-component">
            <EuiText>
                <h1>
                    # User review
                </h1>
                {/*<h4>
                    해당 리뷰는 브릿지에 대한 평가에 반영되는 항목입니다. (+공신력, 자료 제공을 위한 유도하는 글)
                </h4> */}
            </EuiText>
            <EuiSpacer />

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 01 수수료(Fee) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="fee" value={feeScore} setValue={setFeeScore}/>
                <EuiText className="user-feedback">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText 
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={feeText}
                    onChange={(e)=>setFeeText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 02 시간(Time) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="time" value={timeScore} setValue={setTimeScore}/>
                <EuiText className="user-feedback">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={timeText}
                    onChange={(e)=>setTimeText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 03 유저 인터페이스(User Interface) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="interface" value={interfaceScore} setValue={setInterfaceScore}/>
                <EuiText className="user-feedback">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={interfaceText}
                    onChange={(e)=>setInterfaceText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 04 사용자 지원 </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="support" value={supportScore} setValue={setSupportScore}/>
                <EuiText className="user-feedback">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={supportText}
                    onChange={(e)=>setSupportText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            <div className="user-review-submit"> 
            <EuiButton
                color={undefined}
                size="m"
                fill
                >
                Submit
            </EuiButton>
            </div>
      </div>
        
    )
}

export default User

