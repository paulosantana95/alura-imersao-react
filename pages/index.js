import React from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import { useRouter } from 'next/router';



// config title
function Title(props) {
    console.log(props)
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals["000"]};
                    font-size: 24px;
                    font-weight: 600;
                }
                `}
            </style>
        </>
    );
}


// function HomePage() {
//     //JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Title tag="h2">Boas vindas de volta!</Title>
//             <h2>Discord - Alura Matrix</h2>
            

//         </div>

//     );
// }


// export default HomePage


//Initial page
export default function PaginaInicial() {
    // const username = 'paulosantana95';
    const [username, setUsername] = React.useState('paulosantana95');
    const roteamento = useRouter();

    

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    // backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', border: 'solid 2px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 30%)',
                        backgroundColor: appConfig.theme.colors.neutrals["003"],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function(event) {
                            event.preventDefault();
                            if (username.length <= 2) {
                                roteamento.push('/404');
                            } else {
                                roteamento.push('/chat');
                            }
                            //maneira tradicional de mudança de pagina
                            // window.location.href = '/chat';
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Bem vindo!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>
                        {/*Campo de texto */}
                        
                        {/* <input
                            type="text"
                            value= {username}
                            onChange = {function handler(event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde está o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}
                        
                        <TextField
                            value={username}
                            onChange={function handler(event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde está o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[300],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.neutrals[200],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.neutrals[200],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[200],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            gap: "0.75rem",
                            width: "100%",
                            // backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            // borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}