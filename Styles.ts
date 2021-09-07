import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  login_container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  login_header: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: "#208AEC",
  },
  login_header_logo: {
    width: 220,
    resizeMode: "contain",
  },
  login_header_text: {
    marginTop: 15,
    color: "#f0f0f0",
    fontSize: 16,
  },
  login_header_text_bold: {
    color: "#fff",
    fontWeight: "bold",
  },
  login_wrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 40,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: -10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  form: {
    width: "100%",
    maxWidth: 280,
  },
  form_input: {
    height: 44,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#EDF0F7",
    borderRadius: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    backgroundColor: "#0065A4",
    borderRadius: 50,
  },
  button_label: {
    color: "#fff",
    fontSize: 15,
  },
  login_social: {
    width: "100%",
    maxWidth: 280,
    marginTop: 20,
  },
  login_social_separator: {
    flexDirection: "row",
    alignItems: "center",
  },
  login_social_separator_line: {
    flex: 1,
    width: "100%",
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  login_social_separator_text: {
    marginHorizontal: 10,
    color: "#808080",
    fontSize: 16,
    paddingBottom: 6,
    paddingTop: 6,
  },
  login_social_buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  login_social_button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 60,
  },
  login_social_icon: {
    width: 38,
    height: 38,
    resizeMode: "contain",
  },
  login_social_facebook: {
    backgroundColor: "#4267B2",
    borderColor: "#4267B2",
  },
  login_footer_text: {
    flexDirection: "row",
    alignItems: "center",
    color: "#808080",
    fontSize: 15,
  },
  login_footer_link: {
    color: "#208AEC",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Styles;
