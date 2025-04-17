

export default function Tabs({ children, ButtonsContainer = 'menu', buttons }) {
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}