import {
  Circle,
  Document,
  Font,
  Line,
  Page,
  StyleSheet,
  Svg,
  Text,
  Text as SvgText,
  View,
  pdf,
} from "@react-pdf/renderer";

import { CERTIFICATE_LEVEL_LABELS, GENDER_LABELS } from "@/lib/certificate/domain/constants";
import { formatAddressForPdf, getRecommendation } from "@/lib/certificate/domain/formatters";
import type { CertificatePrintData } from "@/lib/certificate/domain/types";

Font.register({
  family: "NanumGothic",
  fonts: [
    {
      src: "/fonts/NanumGothic-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/NanumGothic-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    backgroundColor: "#ffffff",
    color: "#25130b",
    fontFamily: "NanumGothic",
    fontSize: 11,
    lineHeight: 1.45,
  },
  sheet: {
    borderWidth: 3,
    borderColor: "#4b2713",
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    backgroundColor: "#fff8e9",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#8d6a3f",
    paddingBottom: 14,
  },
  titleBlock: {
    flexDirection: "column",
    gap: 0,
    maxWidth: 410,
  },
  kicker: {
    fontSize: 9,
    letterSpacing: 1.3,
    lineHeight: 1.25,
    color: "#321f14",
  },
  kickerRule: {
    marginTop: 6,
    width: 110,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(75, 39, 19, 0.6)",
  },
  titleStack: {
    marginTop: 10,
    flexDirection: "column",
    gap: 2,
  },
  titlePrimary: {
    fontSize: 23,
    fontWeight: "bold",
    lineHeight: 1.16,
    color: "#241108",
  },
  titleSecondary: {
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 1.2,
    color: "#412314",
  },
  statusWrap: {
    alignItems: "flex-end",
    minWidth: 140,
  },
  statusLabel: {
    fontSize: 9,
    color: "#2b1c10",
  },
  statusValue: {
    marginTop: 6,
    borderWidth: 2,
    borderColor: "#ad0f22",
    color: "#ad0f22",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
  },
  table: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: "rgba(63, 34, 20, 0.3)",
  },
  row: {
    flexDirection: "row",
    alignItems: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(63, 34, 20, 0.22)",
  },
  rowMultiline: {},
  rowLast: {
    borderBottomWidth: 0,
  },
  labelCell: {
    width: 160,
    flexShrink: 0,
    justifyContent: "center",
    backgroundColor: "rgba(120, 80, 43, 0.1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(63, 34, 20, 0.22)",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 12,
  },
  labelCellMultiline: {
    justifyContent: "flex-start",
  },
  labelText: {
    fontWeight: "bold",
    lineHeight: 1.3,
  },
  valueCell: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    justifyContent: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 12,
  },
  valueCellMultiline: {
    justifyContent: "flex-start",
    paddingTop: 9,
    paddingBottom: 9,
  },
  valueText: {
    lineHeight: 1.3,
    maxWidth: "100%",
  },
  valueTextMultiline: {
    lineHeight: 1.3,
    maxWidth: "100%",
    fontSize: 10,
  },
  diagnosis: {
    marginTop: 26,
    borderWidth: 1,
    borderColor: "rgba(63, 34, 20, 0.3)",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  diagnosisTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  diagnosisBody: {
    marginTop: 10,
    lineHeight: 1.65,
    fontSize: 14,
  },
  recommend: {
    marginTop: 10,
    color: "#8f0616",
    fontWeight: "bold",
    lineHeight: 1.55,
    fontSize: 13,
  },
  footer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  footerMeta: {
    flexDirection: "column",
    gap: 4,
  },
  footerMetaText: {
    fontSize: 12,
  },
  signWrap: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  seal: {
    width: 98,
    height: 98,
  },
  physician: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 13,
  },
});

function InfoRow({
  label,
  value,
  isLast = false,
  multiline = false,
}: {
  label: string;
  value: string;
  isLast?: boolean;
  multiline?: boolean;
}) {
  const rowStyle =
    multiline && isLast
      ? [styles.row, styles.rowMultiline, styles.rowLast]
      : multiline
        ? [styles.row, styles.rowMultiline]
        : isLast
          ? [styles.row, styles.rowLast]
          : styles.row;

  return (
    <View style={rowStyle}>
      <View style={multiline ? [styles.labelCell, styles.labelCellMultiline] : styles.labelCell}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={multiline ? [styles.valueCell, styles.valueCellMultiline] : styles.valueCell}>
        <Text
          wrap
          style={multiline ? [styles.valueText, styles.valueTextMultiline] : styles.valueText}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

function renderTextOnArc(
  text: string,
  radius: number,
  startAngle: number,
  endAngle: number,
  fontSize: number,
) {
  const characters = Array.from(text);
  const centerX = 250;
  const centerY = 250;
  const total = characters.length;

  return characters.map((character, index) => {
    const progress = total === 1 ? 0.5 : index / (total - 1);
    const angle = startAngle + (endAngle - startAngle) * progress;
    const radians = (angle * Math.PI) / 180;
    const x = centerX + Math.cos(radians) * radius;
    const y = centerY + Math.sin(radians) * radius;
    const rotation = angle + 90;

    return (
      <SvgText
        key={`${text}-${index}-${character}`}
        x={x}
        y={y}
        textAnchor="middle"
        fill="#c0001a"
        transform={`rotate(${rotation}, ${x}, ${y})`}
        style={{
          fontFamily: "NanumGothic",
          fontWeight: "bold",
          fontSize,
        }}
      >
        {character === " " ? "\u00A0" : character}
      </SvgText>
    );
  });
}

function SealStamp() {
  const sealColor = "#c0001a";

  return (
    <View style={styles.seal}>
      <Svg viewBox="0 0 500 500" width="98" height="98">
        <Circle cx="250" cy="250" r="230" fill="none" stroke={sealColor} strokeWidth="6" />
        <Circle cx="250" cy="250" r="213" fill="none" stroke={sealColor} strokeWidth="2" />
        <Circle cx="250" cy="250" r="148" fill="none" stroke={sealColor} strokeWidth="2" />

        {renderTextOnArc("AEJIS RAPID RESPONSE TEAM", 213, -168, -12, 18)}
        {renderTextOnArc("TENKAI GENERAL HOSPITAL", 213, 12, 168, 18)}

        <SvgText
          x="63"
          y="258"
          textAnchor="middle"
          fill={sealColor}
          style={{ fontFamily: "NanumGothic", fontSize: 20 }}
        >
          ★
        </SvgText>
        <SvgText
          x="437"
          y="258"
          textAnchor="middle"
          fill={sealColor}
          style={{ fontFamily: "NanumGothic", fontSize: 20 }}
        >
          ★
        </SvgText>

        <Circle cx="48" cy="250" r="3" fill={sealColor} />
        <Circle cx="452" cy="250" r="3" fill={sealColor} />

        <SvgText
          x="250"
          y="226"
          textAnchor="middle"
          fill={sealColor}
          style={{
            fontFamily: "NanumGothic",
            fontWeight: "bold",
            fontSize: 52,
            letterSpacing: 6,
          }}
        >
          天久
        </SvgText>
        <Line x1="188" y1="242" x2="312" y2="242" stroke={sealColor} strokeWidth="1.5" />
        <SvgText
          x="250"
          y="292"
          textAnchor="middle"
          fill={sealColor}
          style={{
            fontFamily: "NanumGothic",
            fontWeight: "bold",
            fontSize: 52,
            letterSpacing: 6,
          }}
        >
          鷹央
        </SvgText>
      </Svg>
    </View>
  );
}

function CertificatePrintDocument({ data }: { data: CertificatePrintData }) {
  const scoreText = `${data.score} / 100`;
  const levelText = CERTIFICATE_LEVEL_LABELS[data.level] ?? data.level.toUpperCase();
  const sexText = GENDER_LABELS[data.sex] ?? "Prefer not to say";
  const recommendation = getRecommendation(data.score);
  const wrappedAddress = formatAddressForPdf(data.address);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sheet}>
          <View style={styles.topRow}>
            <View style={styles.titleBlock}>
              <Text style={styles.kicker}>MEDICAL CERTIFICATE</Text>
              <View style={styles.kickerRule} />
              <View style={styles.titleStack}>
                <Text style={styles.titlePrimary}>Acute Episode of Japan</Text>
                <Text style={styles.titlePrimary}>Ikitai Syndrome</Text>
              </View>
            </View>

            <View style={styles.statusWrap}>
              <Text style={styles.statusLabel}>STATUS</Text>
              <Text style={styles.statusValue}>{levelText}</Text>
            </View>
          </View>

          <View style={styles.table}>
            <InfoRow label="Patient Name" value={data.patient} />
            <InfoRow label="Date of Birth" value={data.birth} />
            <InfoRow label="Gender Identity" value={sexText} />
            <InfoRow label="Address" value={wrappedAddress} multiline />
            <InfoRow label="Japan Ikitai Score" value={scoreText} />
            <InfoRow label="Certificate ID" value={data.serial} isLast />
          </View>

          <View style={styles.diagnosis}>
            <Text style={styles.diagnosisTitle}>Clinical Notes</Text>
            <Text style={styles.diagnosisBody}>{data.note}</Text>
            <Text style={styles.recommend}>Recommendation: {recommendation}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerMeta}>
              <Text style={styles.footerMetaText}>Issue Date: {data.issued}</Text>
              <Text style={styles.footerMetaText}>Medical Institution: {data.hospital}</Text>
            </View>

            <View style={styles.signWrap}>
              <SealStamp />
              <Text style={styles.physician}>Attending Physician: {data.doctor}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export async function renderCertificatePdfBlob(data: CertificatePrintData): Promise<Blob> {
  return pdf(<CertificatePrintDocument data={data} />).toBlob();
}
