import { CardWrapper } from "./CardWrapper";

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Dont have an accont?"
            backButtonHref="/auth/register"
            showSocial
        >
            Login Form
        </CardWrapper>
    );
}