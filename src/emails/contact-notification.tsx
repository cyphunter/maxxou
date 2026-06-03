import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  requestType: string;
  organisation?: string;
  message: string;
}

const row = { margin: "6px 0", fontSize: 14, color: "#262625" } as const;
const labelStyle = { color: "#8a6310", fontWeight: 600 } as const;

export default function ContactNotificationEmail({
  name,
  email,
  phone,
  requestType,
  organisation,
  message,
}: ContactNotificationProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>
        Nouvelle demande — {requestType} de {name}
      </Preview>
      <Body
        style={{
          backgroundColor: "#f6f1e9",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "24px 0",
        }}
      >
        <Container style={{ margin: "0 auto", padding: "8px 24px", maxWidth: 560 }}>
          <Text
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8a6310",
              margin: "0 0 4px",
            }}
          >
            Maxou Officiel · Nouvelle demande
          </Text>
          <Heading style={{ fontSize: 24, color: "#10182f", margin: "0 0 20px" }}>
            {requestType} — {name}
          </Heading>
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: 24,
              borderRadius: 12,
              border: "1px solid #e9decb",
            }}
          >
            <Text style={row}>
              <span style={labelStyle}>Nom :</span> {name}
            </Text>
            <Text style={row}>
              <span style={labelStyle}>Email :</span> {email}
            </Text>
            {phone ? (
              <Text style={row}>
                <span style={labelStyle}>Téléphone :</span> {phone}
              </Text>
            ) : null}
            {organisation ? (
              <Text style={row}>
                <span style={labelStyle}>Structure :</span> {organisation}
              </Text>
            ) : null}
            <Hr style={{ borderColor: "#e9decb", margin: "12px 0" }} />
            <Text style={row}>
              <span style={labelStyle}>Motif :</span> {requestType}
            </Text>
            <Hr style={{ borderColor: "#e9decb", margin: "12px 0" }} />
            <Text style={{ ...row, whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>
          <Text style={{ fontSize: 12, color: "#8a897f", margin: "16px 0 0", textAlign: "center" }}>
            Répondez directement à cet email pour recontacter {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
