import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useShoping } from "context/context";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { getInitPoint } from "product/mercadopago";
import { validateEmail } from "utils/helper";

const RegisterForm = () => {
  const { isOpenForm, onCloseForm, cart, setUser, user } = useShoping();
  const [disabled, setDisabled]= useState(false);
  const router = useRouter();
  const toast = useToast();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { email, name, surname } = user;

  const onChangeInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };

  const btnHanlderPay = () => {
    let title = "Datos completados correctamente";
    let status = "success";
    if (email == "" || name == "" || surname == "") {
      title = "Todos los campos son requeridos";
      status = "warning";
    } else if (!validateEmail(email)) {
      title = "Email no válido";
      status = "warning";
    } else {
      console.log("enviado:", cart, user);
      setDisabled(true);
      getInitPoint(cart, user, "api/api_mp")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          router.push(data.init_point);
          status = "success";
        })
        .catch((error) => {
          title = "Ocurrió un error inesperado.";
          status = "error";
          console.log("Hubo un error: ", error)
        })
        .finally(() =>{
          toast({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            status,
            title,
            isClosable: true,
            position: "top",
          });
        });
    }
  };
  //check
  // useEffect(() => {
  //   setUser({} as User);
  // }, []);

  return (
    <>
      {/* <Button onClick={onOpenForm}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenForm}
        onClose={onCloseForm}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Datos para tu compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" pb={6}>
            <FormControl>
              <FormLabel>Nombre </FormLabel>
              <Input
                value={name}
                onChange={onChangeInput}
                name="name"
                ref={initialRef}
                placeholder="Ej. Pablo "
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Apellido</FormLabel>
              <Input
                value={surname}
                onChange={onChangeInput}
                name="surname"
                ref={initialRef}
                placeholder="Ej.  Perez"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Correo electrónico</FormLabel>
              <Input
                value={email}
                onChange={onChangeInput}
                name="email"
                placeholder="Ej. micorreo@ejemplo.com"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={btnHanlderPay} disabled={disabled} colorScheme="blue" mr={3}>
              Ir a MercadoPago
            </Button>
            <Button onClick={onCloseForm}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterForm;
