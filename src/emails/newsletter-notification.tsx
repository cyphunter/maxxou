import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface NewsletterNotificationProps {
  email: string;
}

export default function NewsletterNotificationEmail({
  email,
}: NewsletterNotificationProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Nouvelle inscription newsletter — {email}</Preview>
      <Body
        style={{
          backgroundColor: "#f6f1e9",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "24px 0",
        }}
      >
        <Container style={{ margin: "0 auto", padding: "8px 24px", maxWidth: 520 }}>
          <Text
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8a6310",
              margin: "0 0 4px",
            }}
          >
            Maxou Officiel · Newsletter
          </Text>
          <Heading style={{ fontSize: 22, color: "#10182f", margin: "0 0 16px" }}>
            Nouvelle inscription
          </Heading>
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: 20,
              borderRadius: 12,
              border: "1px solid #e9decb",
            }}
          >
            <Text style={{ margin: 0, fontSize: 15, color: "#262625" }}>
              <span style={{ color: "#8a6310", fontWeight: 600 }}>Email :</span> {email}
            </Text>
          </Section>
          <Text style={{ fontSize: 12, color: "#8a897f", margin: "16px 0 0" }}>
            Pensez à ajouter cette adresse à votre liste de diffusion.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
