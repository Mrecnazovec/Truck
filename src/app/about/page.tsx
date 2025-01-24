import React from "react";
import { Promo } from "../components/sections/Promo";
import { Container } from "../components/ui/Container";
import { Title } from "../components/ui/Title";
import { Fluid } from "../components/ui/Fluid";
import { LinkItem } from "../components/ui/LinkItem";
import { StaffCard } from "../components/ui/StaffCard";
import AOSComponent from "../lib/aos";

const page = () => {
  return (
    <main className="flex-1 pt-24">
      <Promo imgSrc="/svg/about.svg" title="О нас" />
      <AOSComponent>
        <Container data-aos="fade-up" className="mb-24">
          <Title>О нас</Title>
          <Fluid>
            <p className="h3 mb-7">
              Мы — команда единомышленников, объединенных страстью к профессии и
              стремлением к совершенству. Наша миссия — обеспечивать безопасные,
              надежные и оперативные перевозки грузов. Мы не просто выполняем
              заказы, мы создаем уникальные решения, которые выводят наших
              клиентов на новый уровень.
            </p>
            <LinkItem href="/form">Оставить заявку</LinkItem>
          </Fluid>
        </Container>
      </AOSComponent>

      <Container className="mb-24">
        <AOSComponent>
          <Title data-aos="fade-up">Наша Команда</Title>
        </AOSComponent>
        <Fluid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <StaffCard
            aos="fade-up-left"
            name="Иванов Иван Иванович"
            post="Директор"
            tel="+7 (843) 123-45-67"
            email="info@info.ru"
            imageSrc="/jpg/Ilon.jpg"
          />
          <StaffCard
            aos="fade-up"
            name="Иванов Иван Иванович"
            post="Директор"
            tel="+7 (843) 123-45-67"
            email="info@info.ru"
            imageSrc="/jpg/Ilon.jpg"
          />
          <StaffCard
            aos="fade-up-right"
            name="Иванов Иван Иванович"
            post="Директор"
            tel="+7 (843) 123-45-67"
            email="info@info.ru"
            imageSrc="/jpg/Ilon.jpg"
          />
          <StaffCard
            aos="fade-down-left"
            name="Иванов Иван Иванович"
            post="Директор"
            tel="+7 (843) 123-45-67"
            email="info@info.ru"
            imageSrc="/jpg/Ilon.jpg"
          />
          <StaffCard
            aos="fade-down"
            name="Иванов Иван Иванович"
            post="Директор"
            tel="+7 (843) 123-45-67"
            email="info@info.ru"
            imageSrc="/jpg/Ilon.jpg"
          />
          <StaffCard
            aos="fade-down-right"
            name="Иванов Иван Иванович"
            post="Директор"
            tel="+7 (843) 123-45-67"
            email="info@info.ru"
            imageSrc="/jpg/Ilon.jpg"
          />
        </Fluid>
      </Container>

      <AOSComponent>
        <Container data-aos="fade-up" className="mb-24">
          <Title>Наша Миссия</Title>
          <Fluid>
            <p className="h3 mb-7">
              Мы созданы, чтобы связывать мир, обеспечивая надежную и
              эффективную транспортировку грузов. Мы бережно и ответственно
              организуем логистику, способствуя развитию бизнеса наших
              партнеров, улучшению качества жизни сотрудников и внесению вклада
              в процветание общества.
            </p>
          </Fluid>
        </Container>
      </AOSComponent>
    </main>
  );
};

export default page;
